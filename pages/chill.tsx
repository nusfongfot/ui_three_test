import {
  Box,
  Checkbox,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaidIcon from "@mui/icons-material/Paid";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import WalletIcon from "@mui/icons-material/Wallet";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const dataSelect = [
  { id: 1, title: "Credit & Debit Card", icon: <CreditCardIcon /> },
  { id: 2, title: "Pay With Points", icon: <PaidIcon /> },
  { id: 3, title: "Mobile Banking", icon: <MobileFriendlyIcon /> },
  { id: 4, title: "Internet Banking", icon: <AccountBalanceIcon /> },
  { id: 5, title: "QR PromptPay", icon: <QrCodeIcon /> },
  { id: 6, title: "Bill Payment", icon: <LocalPrintshopIcon /> },
  { id: 7, title: "e-Wallet", icon: <WalletIcon /> },
  { id: 8, title: "Kiosk Machine", icon: <SmartToyIcon /> },
];

const dataBanks = [
  { id: 1, src: "assets/images/ktb.jpg", title: "Krungthai Bank" },
  { id: 2, src: "assets/images/scb.jpg", title: "Siam Commercial Bank" },
  { id: 3, src: "assets/images/bbl.png", title: "Bangkok Bank" },
  { id: 4, src: "assets/images/krung.jpg", title: "Krungsri Bank" },
  { id: 5, src: "assets/images/ttb.png", title: "TMB Thanachart Bank" },
];
function ChillPage() {
  return (
    <Container maxWidth='lg' sx={{ mt: 2 }}>
      <nav>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <img
              src='assets/images/logo1.png'
              style={{ width: 60, height: 60 }}
            />
            <Stack flexDirection={"column"}>
              <Typography variant='subtitle2' fontWeight={700}>
                Prain Fintech
              </Typography>
              <Box>
                <Stack flexDirection={"row"} gap={2}>
                  <Stack flexDirection={"row"} gap={1}>
                    <LocalPhoneIcon
                      sx={{
                        color: "white",
                        background: "black",
                        borderRadius: "50%",
                        fontSize: 20,
                        width: 20,
                        height: 20,
                        p: 0.5,
                      }}
                    />
                    <Typography variant='subtitle2'>021077788-1</Typography>
                  </Stack>
                  <Stack flexDirection={"row"} gap={1}>
                    <EmailIcon
                      sx={{
                        color: "white",
                        background: "black",
                        borderRadius: "50%",
                        fontSize: 20,
                        width: 20,
                        height: 20,
                        p: 0.5,
                      }}
                    />
                    <Typography variant='subtitle2'>
                      napak@prainfintech.com
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <img
            src='assets/images/eng.png'
            style={{ width: 25, height: 25, borderRadius: "50%" }}
          />
        </Stack>
        <Divider />
      </nav>

      <Grid container sx={{ mt: 2 }} spacing={3}>
        <Grid item xs={12} lg={3}>
          <Typography fontWeight={700}>
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(94, 217, 228)",
              }}
            >
              Select
            </span>{" "}
            Payment Channel
          </Typography>
          {dataSelect.map((item) => (
            <Stack
              flexDirection={"row"}
              gap={1}
              sx={{ mt: 2 }}
              alignItems={"center"}
              key={item.id}
            >
              <Box sx={{ color: item.id == 4 ? "blue" : "" }}>{item.icon}</Box>
              <Typography
                variant='subtitle2'
                sx={{ color: item.id == 4 ? "blue" : "" }}
              >
                {item.title}
              </Typography>
            </Stack>
          ))}
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ mt: 5 }} />

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            gap={2}
          >
            {dataBanks.map((item) => (
              <Box
                sx={{
                  border: "1px solid rgb(199, 199, 199)",
                  p: 1,
                  borderRadius: "0.5rem",
                  width: 250,
                }}
                key={item.id}
              >
                <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
                  <img src={item.src} style={{ width: 40, height: 40 }} />
                  <Typography fontWeight={700} variant='subtitle2'>
                    {item.title}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Typography fontWeight={700}>
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgb(94, 217, 228)",
              }}
            >
              Fill in
            </span>{" "}
            Contact Information
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField size='small' placeholder='Name *' />
            <TextField size='small' placeholder='Lastname *' sx={{ mt: 2 }} />
            <TextField
              size='small'
              placeholder='Phone Number *'
              sx={{ mt: 2 }}
            />
            <TextField size='small' placeholder='E-mail *' sx={{ mt: 2 }} />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 5 }} />
      <Grid container>
        <Grid item xs={12} lg={5.5}>
          <Box sx={{ mt: 2 }}>
            <Stack flexDirection={"column"}>
              <Stack flexDirection={"row"} gap={1}>
                <img
                  src='assets/images/shoes.jpg'
                  style={{ width: 80, height: 80 }}
                />
                <Box>
                  <Typography sx={{ color: "grey" }}>
                    Product / Service
                  </Typography>
                  <Typography>รองเท้า</Typography>
                </Box>
              </Stack>
            </Stack>
            <Typography sx={{ color: "grey" }}>Description</Typography>
            <Typography>รองเท้าน่ารัก</Typography>
          </Box>
        </Grid>
        <Divider orientation='vertical' flexItem sx={{ mt: 1 }} />

        <Grid item xs={12} lg={5.5}>
          <Box sx={{ mt: 2, ml: 2 }}>
            <Stack flexDirection={"row"} gap={15}>
              <Box>
                <Typography sx={{ color: "grey" }} variant='subtitle2'>
                  Subtotal
                </Typography>
                <Typography fontWeight={700}>3,333.00 THB</Typography>
                <Typography sx={{ color: "grey", mt: 2 }} variant='subtitle2'>
                  Payment Fee
                </Typography>
                <Typography fontWeight={700}>0.00 THB</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "grey" }} variant='subtitle2'>
                  Total Amount
                </Typography>
                <Paper
                  sx={{ background: "rgb(229, 229, 229)", p: 1, width: 250 }}
                >
                  <Stack flexDirection={"column"} alignItems={"center"}>
                    <Typography variant='subtitle2'>
                      1662 DAYS : 09 : 05 : 50
                    </Typography>
                    <Typography fontWeight={700} variant='h5'>
                      3,333.00 THB
                    </Typography>
                  </Stack>
                </Paper>
                <Typography sx={{ color: "red" }} variant='subtitle2'>
                  Please fill your information completely.
                </Typography>
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <Checkbox size='small' />
                  <Box sx={{ mt: 2 }}>
                    <Typography variant='subtitle2' sx={{ color: "grey" }}>
                      I have read and accept
                    </Typography>
                    <Typography variant='subtitle2' sx={{ color: "grey" }}>
                      the{" "}
                      <span style={{ textDecoration: "underline" }}>
                        terms & conditions
                      </span>{" "}
                      of ChillPay
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 1 }} />
      <Stack
        justifyContent={"space-between"}
        flexDirection={"row"}
        mt={2}
        mb={2}
      >
        <Box />
        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
          <Typography sx={{ color: "grey", fontSize: 10 }}>
            &copy; 2023 Prain FinTech Co., Ltd. All rights reserved.
          </Typography>
          <Divider orientation='vertical' flexItem />

          <Typography style={{ color: "blue", fontSize: 10 }}>
            www.chillpay.co
          </Typography>
          <img
            src='assets/images/logo2.png'
            style={{ width: 60, height: 15 }}
          />
        </Stack>
      </Stack>
    </Container>
  );
}
export default ChillPage;
