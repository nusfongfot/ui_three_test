import { Box, Button, Stack, Typography } from "@mui/material";

type Props = {};
const dataImage = [
  { id: 1, src: "assets/images/bbl.png" },
  { id: 2, src: "assets/images/ttb.png" },
  { id: 3, src: "assets/images/krung.jpg" },
  { id: 4, src: "assets/images/ktb.jpg" },
  { id: 5, src: "assets/images/scb.jpg" },
  { id: 6, src: "assets/images/kbtg.png" },
  { id: 7, src: "assets/images/aom.jpg" },
  { id: 8, src: "assets/images/uob.png" },
];

function QrPage({}: Props) {
  return (
    <Stack
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <img
        src='assets/images/logo.png'
        style={{ width: 70, height: 70, borderRadius: "50%" }}
      />
      <Typography mt={1} variant='h5'>
        QR PAYMENT
      </Typography>

      <Box
        sx={{
          border: "1px solid grey",
          p: 1,
          borderRadius: "0.5rem",
          mt: 2,
          width: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>Payment Time Left</Typography>
        <Typography variant='h5' sx={{ color: "blue", fontWeight: 700 }}>
          14:44
        </Typography>
      </Box>
      <img src='assets/images/qrcode.png' style={{ width: 150, height: 150 }} />

      <Stack flexDirection={"row"} gap={1}>
        {dataImage.map((item) => (
          <img src={item.src} style={{ width: 30, height: 30 }} key={item.id} />
        ))}
      </Stack>

      <Typography variant='h6' sx={{ color: "purple", mt: 2 }}>
        Please scan QR Code with your mobile by using Mobile Banking Application
      </Typography>
      <Typography variant='body2' sx={{ color: "purple", mt: 2 }}>
        Customers using the iOS operating system or in-app browsers (such as
        Line or Facebook)
      </Typography>
      <Typography variant='body2' sx={{ color: "purple" }}>
        can utilize screen capture as an alternative to using the save button
      </Typography>

      <Typography variant='body2' sx={{ color: "grey", mt: 2 }}>
        TrueMoney Wallet does not support the QR Payment
      </Typography>

      <Button
        variant='contained'
        sx={{
          mt: 6,
          background: "purple",
          width: 250,
          ":hover": {
            background: "purple",
          },
        }}
      >
        Save OR
      </Button>
      <Typography sx={{ textDecoration: "underline", color: "grey", mt: 4 }}>
        How to pay
      </Typography>
      <Stack flexDirection={"row"} gap={1} mt={1}>
        <img src='assets/images/eng.png' style={{ width: 30, height: 20 }} />
        <img
          src='assets/images/thai.png'
          style={{
            width: 30,
            height: 20,
            opacity: "0.2",
          }}
        />
        <img
          src='assets/images/chinese.png'
          style={{
            width: 30,
            height: 20,
            opacity: "0.2",
          }}
        />
      </Stack>
      <Typography sx={{ color: "grey", fontSize: 10, mt: 2 }}>
        &copy; 2023 ChillPay All rights reserved.
      </Typography>
      <Typography sx={{ color: "grey", fontSize: 8 }}>
        Powered by Prain FinTech Co.,Ltd.
      </Typography>
    </Stack>
  );
}
export default QrPage;
