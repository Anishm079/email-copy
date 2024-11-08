import { ChangeEvent, useRef, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './App.css';
import { Button, Grid2, TextField } from '@mui/material';
import { GetEmailText, Item } from './utility/UtilityComponents';
import { copyStyledText } from './constants/emailText';

function App() {
  const [profile, setProfile] = useState<string>('');
  const [hrName, setHrName] = useState<string>("HR");
  const [companyName, setCompanyName] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const emailTextRef = useRef<HTMLDivElement>(null);

  function handleProfileChange(event: SelectChangeEvent): void {
    setProfile(event.target.value as string);
  }

  function handleHRNameChange(event:ChangeEvent<HTMLInputElement>):void {
    setHrName(event.target.value as string);
  }

  function handleCompanyNameChange(event:ChangeEvent<HTMLInputElement>):void {
    setCompanyName(event.target.value as string);
  }

  function handleCopyEmailText():void{
    if(emailTextRef.current){
      copyStyledText(emailTextRef.current);
      setCopied(true);
    }
  }

  function handleReset():void{
    setProfile("");
    setCompanyName("");
    setHrName("HR");
    setCopied(false);
  }

  return (
    <div className="w-100 h-dvh">
      <h2 className="w-100 header">copy email</h2>
      <Grid2 container spacing={2} margin={5} >
        <Grid2 size={{ xs: 12, md: 6, sm:6 }}>
          <Item>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Profile</InputLabel>
            <Select
              id="demo-simple-select"
              value={profile}
              label="Profile"
              onChange={handleProfileChange}
            >
              <MenuItem value={'Full Stack Engineer'}>
                Full Stack Engineer
              </MenuItem>
              <MenuItem value={'Full Stack Developer'}>
                Full Stack Developer
              </MenuItem>
              <MenuItem value={'MERN Stack Developer'}>MERN Stack</MenuItem>
              <MenuItem value={'Node Js Developer'}>Node Js</MenuItem>
              <MenuItem value={'React Js Developer'}>React Js</MenuItem>
              <MenuItem value={'Next Js Developer'}>Next Js</MenuItem>
              <MenuItem value={'Nest Js Developer'}>Nest Js</MenuItem>
              <MenuItem value={'Python Developer'}>Python Developer</MenuItem>
            </Select>
          </FormControl>
          </Item>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, sm:6 }}>
          <Item>
          <TextField fullWidth id="outlined-basic" label="HR Name" value={hrName} onChange={handleHRNameChange} variant="outlined" />
          </Item>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 12, sm:12 }}>
          <Item>
          <TextField fullWidth id="outlined-basic" label="Company Name" value={companyName} onChange={handleCompanyNameChange} variant="outlined" />
          </Item>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 12, sm:12 }}>
          <Item>
            <Button className='w-100' color={copied ? "success" :'secondary'} variant='contained' onClick={handleCopyEmailText} >{copied ? "Copied" : "Copy Email"}</Button>
          </Item>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 12, sm:12 }}>
          <Item>
            <Button className='w-100' color={"primary"} variant='contained' onClick={handleReset} >Reset</Button>
          </Item>
        </Grid2>
        <Grid2 size={6} />
        <Grid2>
        <Item>
          <div style={{marginTop:"2em", textAlign:"start", color:"black"}} >
            <GetEmailText ref={emailTextRef} companyName={companyName} hrName={hrName} profile={profile} />
          </div>
        </Item>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default App;
