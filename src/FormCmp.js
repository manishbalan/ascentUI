import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import Accordions from "./Accordions";
import OracleLogo from "./OracleLogo.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import UploadIcon from "@mui/icons-material/Upload";
import group from "./group.png";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Stack
        spacing={1}
        direction="row"
        sx={{ marginBottom: 2, width: "100%", boxShadow: "0px 1px #00000029" }}
      >
        <Typography align="left"  sx={{ paddingBottom: 2}}>Org Setup</Typography>
      </Stack>
      <Stack
        spacing={4}
        direction="row"
        sx={{ marginBottom: 2, width: "100%" }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography align="left">Details</Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 13 }}
            align="left"
          >
            Page to configure all the company details
          </Typography>
        </Box>

        <Box sx={{ width: "100%", align: "right" }}>
          <Button
            variant="outlined"
            startIcon={<UploadIcon />}
            type="submit"
            sx={{ marginRight: 2 }}
          >
            Bulk Upload
          </Button>
          <Button variant="contained" type="submit" startIcon={<SaveIcon />}>
            Save
          </Button>
        </Box>
        <img src={group} alt="group" width="8%" height="70%" />
      </Stack>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10% 10% 0 10% ",
          }}
        >
          <Stack spacing={4} direction="row" sx={{ marginBottom: 2 }}>
            <img src={OracleLogo} alt="OracleLogo" width="90%" height="10%" />
            <Box sx={{ width: "90%", maxWidth: 500 }}>
              <Typography align="left">Organisation Logo</Typography>

              <Typography
                sx={{ color: "text.secondary", fontSize: 13 }}
                align="left"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <Typography
                align="left"
                sx={{ color: "text.secondary", fontSize: 10, color: "#D7242E" }}
              >
                Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of
                1MB.
              </Typography>
            </Box>
          </Stack>

          <Stack spacing={4} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Ord Id"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="City Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Ord Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Team Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="No. of Integrations"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Team Count"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Similar Month"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Go Live Month"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Integration Months"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="TAT for Integration"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="AI Cycle"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="ERP Date (Agreed)"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Active AI Time"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Active AI QC Time"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Active AI Time"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="date"
              variant="outlined"
              color="secondary"
              label="Date of Birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
              value={dateOfBirth}
              fullWidth
              required
              sx={{ mb: 4 }}
              placeholder="Placeholder"
            />
          </Stack>
        </div>
      </form>
      <Accordions />
    </React.Fragment>
  );
};

export default RegisterForm;
