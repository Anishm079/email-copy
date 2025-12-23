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
  ({ companyName, hrName, profile, source }, ref) => {
    return (
      <div ref={ref}>
        <span>
          <span style={{ textTransform: 'capitalize' }}>
            {hrName === 'HR' ? 'Dear' : 'Hi'} {hrName},
          </span>
          <br />
          <br />I hope this message finds you well. I am reaching out to express
          my interest in the {profile} position{' '}
          {companyName ? 'at ' + companyName : ''}, as advertised on{' '}
          {!source ? source : 'LinkedIn'}.
          <br />
          <br />
          <strong>
            With 3 years of professional experience — 1 year at Aldebaran Media
            Pvt. Ltd. and 2 years at Embifi Global Services Pvt. Ltd.
          </strong>{' '}
          — I have gained strong expertise in building and maintaining scalable
          web applications using the <strong>MERN stack</strong>.
          <br />
          <br />
          <strong>At Aldebaran Media, </strong>
          I played a key role in managing server traffic of over 10 million
          requests per day. I worked on enhancing digital marketing solutions by
          ensuring valid and authentic client clicks, while contributing to
          multiple projects involving coupon websites and internal applications.
          My responsibilities included development using the MERN stack and
          deploying services across DigitalOcean Droplets, Firebase, AWS
          Amplify, and Cloudflare.
          <br />
          <br />
          <strong>At Embifi, </strong>
          I played a key role in developing a loan management system and
          utilized AWS services for CI/CD pipelines and automation processes.
          These experiences have honed my ability to design efficient solutions
          and contribute effectively to cross-functional teams.
          <br />
          <br />
          Please find my resume attached for your review. I would be delighted
          to discuss how my background and skills can contribute to the success
          of your team. Feel free to reach out if you require any additional
          details.
          <br />
          <br />
          Thank you very much for considering my application. I look forward to
          the opportunity to connect.
          <br />
          <br />
          <strong>
            Warm Regards,
            <br />
            Anish Ahammad
            <br />
            anishmulla7@gmail.com | +91 8296118668
            <br />
          </strong>
          <br />
          <br />
        </span>
      </div>
    );
  },
);

interface GetMessageTextProps {
  companyName: string;
  hrName?: string;
  profile?: string;
  source?: string;
}

export const GetMessageText = forwardRef<HTMLDivElement, GetMessageTextProps>(
  ({ companyName, hrName, profile, source }, ref) => {
    return (
      <div ref={ref}>
        <span>
          <span style={{ textTransform: 'capitalize' }}>
            {hrName === 'HR' ? 'Dear' : 'Hi'} {hrName},
          </span>
          <br />
          <br />
          This is Anish here. I came across the {profile} opening at{' '}
          {companyName} on {!source ? source : 'LinkedIn'} and would like to
          apply for the role.
          <br />
          <br />
          <strong>
            I have around 3 years of experience working as a Full Stack
            Developer (MERN stack) at Aldebaran Media and Embifi in New Delhi.
          </strong>
          <br />
          <br />
          I have shared my resume over email for your reference and would really
          appreciate it if you could consider my profile for this position.
          <br />
          <br />
          <strong>
            Warm Regards,
            <br />
            Anish Ahammad
            <br />
            anishmulla7@gmail.com | +91 8296118668
            <br />
          </strong>
        </span>
      </div>
    );
  },
);
