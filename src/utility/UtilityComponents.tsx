import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {forwardRef} from 'react';

interface GetEmailTextProps {
    companyName: string;
    hrName: string;
    profile: string;
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
    ({ companyName, hrName, profile }, ref) => {
      return (
        <div ref={ref}>
          <span >
            <span  style={{textTransform:"capitalize"}}>{hrName==="HR"?"Dear":"Hi"} {hrName},</span><br />
            <br />
            I hope this message finds you well. I am reaching out to express my interest in the {profile} position{' '}
            {companyName ? 'at ' + companyName : ''}, as advertised on LinkedIn.
            <br />
            <br />
            <strong>
            With 2 years of hands-on experience at Embifi Global, I have developed robust web applications using the MERN
            stack and leveraged AWS for CI/CD pipelines and automation processes.</strong> My experience building a loan management
            system has strengthened my technical skills and equipped me to make meaningful contributions to your team{' '}
            {companyName ? 'at ' + companyName : ''}.
            <br />
            <br />
            Please find my resume attached for your review. I would be thrilled to discuss how my background and expertise align with the goals of your team. Feel free to
            reach out if you need any additional information.
            <br />
            <br />
            Thank you very much for considering my application. I look forward to the opportunity to connect.
            <br />
            <br />
            <strong>
            Warm regards,<br />
            Anish Ahammad<br />
            anishmulla7@gmail.com | +91 8296118668<br />
            </strong>
          </span>
        </div>
      );
    }
  );
