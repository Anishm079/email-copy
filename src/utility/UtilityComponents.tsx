import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { forwardRef } from 'react';

interface GetEmailTextProps {
  companyName: string;
  hrName?: string;
  profile?: string;
  source?: string;
}

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export const GetEmailText = forwardRef<HTMLDivElement, GetEmailTextProps>(
  ({ hrName }, ref) => {
    return (
      <div ref={ref}>
        <span>
          Hi {hrName},
          <br />
          <br />
          I am a Full Stack Developer with 3.5+ years of experience specialized
          in building secure, high-scale fintech and digital marketing platforms
          using <strong>TypeScript, Javascript, React.js, Node.js, Python, and Next.js.</strong>.
          <br />
          <br />
          Given your current engineering growth, I wanted to reach out. I excel
          at bridging the gap between complex cloud infrastructure and rapid
          product delivery. A few highlights of my work include:
          <br />
          <br />
          <ul style={{ textAlign: 'left', display: 'inline-block', margin: 0, paddingLeft: 18 }}>
            <li>
              <strong>High-Scale Marketing Systems:</strong> Engineered a Next.js
              and Redis-driven offer infrastructure serving{' '}
              <strong>15–20 million daily active users</strong>, utilizing
              geo-intelligence and IPQS fraud detection to completely neutralize
              ad-bot spam.
            </li>
            <li>
              <strong>Fintech Product Evolution:</strong> Accelerated core
              credit-processing speeds by <strong>15%</strong> by migrating legacy
              workflows into a real-time Socket.io Kanban dashboard, and natively
              consolidated the repayment lifecycle via custom NACH payment
              integrations.
            </li>
            <li>
              <strong>Cloud &amp; Server Architecture:</strong> Optimized
              high-availability multi-tier infrastructures across{' '}
              <strong>AWS (Lambda, EC2, S3)</strong> and DigitalOcean Droplets,
              implementing robust automated CI/CD pipelines to securely handle
              millions of requests.
            </li>
          </ul>
          <br />
          <br />
          I have attached my resume for your review. I am actively interviewing
          and available to connect as early as possible.You can
          reach me directly at <strong>+91-8296118668</strong>.
          <br />
          <br />
          <strong>
            Best regards,
            <br />
            Anish Ahammad Mulla
            <br />
            +91-8296118668
            <br />
            anishmulla7@gmail.com
            <br />
            <a href='https://github.com/Anishm079'>github.com</a> | <a href='https://www.linkedin.com/in/anish-mulla-511b391b2/'>linkedin.com</a>
          </strong>
        </span>
      </div>
    );
  },
);

interface GetMessageTextProps {
  hrName?: string;
  profile?: string;
  source?: string;
}

export const GetMessageText = forwardRef<HTMLDivElement, GetMessageTextProps>(
  ({ hrName, profile, source }, ref) => {
    return (
      <div ref={ref}>
        <span>
          Hi {hrName},
          <br />
          <br />
          This is Anish. I came across the {profile} opening on {!source ? source : 'LinkedIn'} and would like to
          apply for the role.
          <br />
          <br />
          <strong>
            I am a Full Stack Developer with 3.5+ years of experience specialized
            in building secure, high-scale fintech and digital marketing platforms
            using TypeScript, Javascript, React.js, Node.js, Python, and Next.js.
          </strong>
          <br />
          <br />
          I have shared my resume over email for your reference and would really
          appreciate it if you could consider my profile for this position.
          <br />
          <br />
          <strong>
            Best regards,
            <br />
            Anish Ahammad Mulla
            <br />
            +91-8296118668
            <br />
            anishmulla7@gmail.com
            <br />
          </strong>
        </span>
      </div>
    );
  },
);
