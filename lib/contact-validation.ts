export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactField = keyof ContactSubmission;
export type ContactValidationErrors = Partial<
  Record<ContactField, string>
>;

export function validateContactSubmission(
  input: unknown,
): {
  data: ContactSubmission | null;
  errors: ContactValidationErrors;
} {
  const errors: ContactValidationErrors = {};

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {
      data: null,
      errors: { message: "Enter a valid message." },
    };
  }

  const values = input as Record<string, unknown>;
  const data: ContactSubmission = {
    name: typeof values.name === "string" ? values.name.trim() : "",
    email: typeof values.email === "string" ? values.email.trim() : "",
    subject:
      typeof values.subject === "string" ? values.subject.trim() : "",
    message: typeof values.message === "string" ? values.message.trim() : "",
  };

  if (!data.name) {
    errors.name = "Please enter your name.";
  } else if (data.name.length > 120) {
    errors.name = "Name must be 120 characters or fewer.";
  }

  if (!data.email) {
    errors.email = "Please enter your email address.";
  } else if (
    data.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (data.subject.length > 180) {
    errors.subject = "Subject must be 180 characters or fewer.";
  }

  if (!data.message) {
    errors.message = "Please enter a message.";
  } else if (data.message.length > 5000) {
    errors.message = "Message must be 5,000 characters or fewer.";
  }

  return {
    data: Object.keys(errors).length === 0 ? data : null,
    errors,
  };
}
