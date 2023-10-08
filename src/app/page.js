"use client"
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Slider, valuetext } from '@mui/material'

export default function Home() {
  return (
    <main className="">
      {/* <Button variant='contained' href='#about' >Hello</Button> */}
      <Button className='ms-2' variant='contained' color='error' onClick={() => console.log('hello')}>
        Click Me
      </Button>
      <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </div>

      <div>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 24, height: 24 }}
        />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </div>
    </main>
  )
}