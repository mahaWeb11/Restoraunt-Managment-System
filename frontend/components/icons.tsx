export function IconMenu() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

export function IconX() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMonitor({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconChart({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M4 19V9M12 19V5M20 19v-6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBook({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M4 5c2-1 5-1 8 0v14c-3-1-6-1-8 0V5zM20 5c-2-1-5-1-8 0v14c3-1 6-1 8 0V5z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCart({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M3 4h2l2.5 11h9l2-8H6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="19" r="1.3" />
      <circle cx="16" cy="19" r="1.3" />
    </svg>
  );
}

export function IconUsers({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="9" cy="8" r="3" />
      <path
        d="M3 20c0-3 3-5 6-5s6 2 6 5M16 8a3 3 0 100-6M21 20c0-2.5-2-4-4-4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconStore({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M4 9l1-5h14l1 5M4 9v10h16V9M4 9h16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSettings({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="3" />
      <path
        d="M19 12a7 7 0 00-.2-1.6l2-1.5-2-3.4-2.3.9a7 7 0 00-2.8-1.6L13 2h-4l-.7 2.8a7 7 0 00-2.8 1.6l-2.3-.9-2 3.4 2 1.5A7 7 0 005 12c0 .5 0 1.1.2 1.6l-2 1.5 2 3.4 2.3-.9c.8.7 1.8 1.3 2.8 1.6L11 22h4l.7-2.8c1-.3 2-.9 2.8-1.6l2.3.9 2-3.4-2-1.5c.1-.5.2-1 .2-1.6z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
