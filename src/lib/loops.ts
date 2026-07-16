const loopsApiBaseUrl = "https://app.loops.so/api/v1";

type LoopsResponse = {
  success?: boolean;
  message?: string;
  id?: string;
};

type SendEventInput = {
  email: string;
  eventName: string;
  firstName?: string;
  source?: string;
  userGroup?: string;
  mailingListId?: string;
  eventProperties?: Record<string, string | number | boolean>;
};

type SendTransactionalEmailInput = {
  email: string;
  transactionalId: string;
  addToAudience?: boolean;
  dataVariables?: Record<string, string | number>;
};

export class LoopsConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LoopsConfigurationError";
  }
}

export class LoopsApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LoopsApiError";
  }
}

function getLoopsApiKey() {
  const apiKey = process.env.LOOPS_API_KEY;

  if (!apiKey) {
    throw new LoopsConfigurationError("LOOPS_API_KEY is not set.");
  }

  return apiKey;
}

function cleanObject<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== undefined && item !== ""),
  ) as Partial<T>;
}

function buildMailingLists(mailingListId?: string) {
  if (!mailingListId) {
    return undefined;
  }

  return Object.fromEntries(
    mailingListId
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean)
      .map((id) => [id, true]),
  );
}

async function loopsRequest(path: string, init: RequestInit) {
  const response = await fetch(`${loopsApiBaseUrl}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getLoopsApiKey()}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  const data = (await response.json().catch(() => ({}))) as LoopsResponse;

  if (!response.ok || data.success === false) {
    throw new LoopsApiError(
      data.message || `Loops request failed with status ${response.status}.`,
    );
  }

  return data;
}

export async function sendLoopsEvent({
  email,
  eventName,
  firstName,
  source,
  userGroup,
  mailingListId,
  eventProperties,
}: SendEventInput) {
  return loopsRequest("/events/send", {
    method: "POST",
    headers: {
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify(
      cleanObject({
        email,
        eventName,
        firstName,
        source,
        userGroup,
        eventProperties: eventProperties ? cleanObject(eventProperties) : undefined,
        mailingLists: buildMailingLists(mailingListId),
      }),
    ),
  });
}

export async function sendLoopsTransactionalEmail({
  email,
  transactionalId,
  addToAudience = false,
  dataVariables,
}: SendTransactionalEmailInput) {
  return loopsRequest("/transactional", {
    method: "POST",
    headers: {
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify(
      cleanObject({
        email,
        transactionalId,
        addToAudience,
        dataVariables: dataVariables ? cleanObject(dataVariables) : undefined,
      }),
    ),
  });
}
