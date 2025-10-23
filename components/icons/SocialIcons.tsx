
import React from 'react';

interface IconProps {
  className?: string;
}

export const LinkedinIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const MediumIcon: React.FC<IconProps> = (props) => (
    <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M7.45,12.06a4.87,4.87,0,0,0-1.2.1,1.58,1.58,0,0,0-.9.45,1.25,1.25,0,0,0-.4,1,1,1,0,0,0,.1.45,1.3,1.3,0,0,0,.4.5,1.72,1.72,0,0,0,.8.3,4.68,4.68,0,0,0,1.2.1h.1a4.68,4.68,0,0,0,1.2-.1,1.72,1.72,0,0,0,.8-.3,1.3,1.3,0,0,0,.4-.5,1,1,0,0,0,.1-.45,1.25,1.25,0,0,0-.4-1,1.58,1.58,0,0,0-.9-.45,4.87,4.87,0,0,0-1.2-.1Zm5-1.5a1.7,1.7,0,0,0-1,.4,1.4,1.4,0,0,0-.4,1v5a1.4,1.4,0,0,0,.4,1,1.7,1.7,0,0,0,1,.4h.1a1.7,1.7,0,0,0,1-.4,1.4,1.4,0,0,0,.4-1v-5a1.4,1.4,0,0,0-.4-1,1.7,1.7,0,0,0-1-.4Zm5.1-.4a2,2,0,0,0-1.2.4,1.3,1.3,0,0,0-.5,1V16a1.2,1.2,0,0,0,.5,1,2,2,0,0,0,1.2.4h.1a1.8,1.8,0,0,0,1.2-.4,1.2,1.2,0,0,0,.5-1V11.5a1.3,1.3,0,0,0-.5-1,2,2,0,0,0-1.2-.4Z"/>
    </svg>
);

export const TelephoneIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);