import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaidIcon from "@mui/icons-material/Paid";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import WalletIcon from "@mui/icons-material/Wallet";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

type Props = {};
const dataSelect = [
  { id: 1, title: "Credit & Debit Card", icon: <CreditCardIcon /> },
  { id: 2, title: "Installment", icon: <PriceChangeIcon /> },
  { id: 3, title: "Pay With Points", icon: <PaidIcon /> },
  { id: 4, title: "Mobile Banking", icon: <MobileFriendlyIcon /> },
  { id: 5, title: "Internet Banking", icon: <AccountBalanceIcon /> },
  { id: 6, title: "QR PromptPay", icon: <QrCodeIcon /> },
  { id: 7, title: "Bill Payment", icon: <LocalPrintshopIcon /> },
  { id: 8, title: "e-Wallet", icon: <WalletIcon /> },
  { id: 9, title: "Kiosk Machine", icon: <SmartToyIcon /> },
];

const currencies = [
  {
    value: "1",
    label: "3 Months / 0.00%",
  },
  {
    value: "2",
    label: "3 Months / 0.65%",
  },
  {
    value: "3",
    label: "4 Months / 0.00%",
  },
  {
    value: "4",
    label: "6 Months / 0.00%",
  },
  {
    value: "5",
    label: "6 Months / 0.65%",
  },
  {
    value: "6",
    label: "10 Months / 0.00%",
  },
];

const dataBank = [
  {
    id: 1,
    src: "assets/images/kbtg.png",
    title1: "Kasikorn Bank",
    title2: "Credit Card Installment",
  },
  {
    id: 2,
    src: "assets/images/ktc.jpg",
    title1: "KTC FLEXI",
    title2: "",
  },
  {
    id: 3,
    src: "assets/images/scb.jpg",
    title1: "Siam Commercial Bank",
    title2: "Credit Card Installment",
  },
  {
    id: 4,
    src: "assets/images/krung.jpg",
    title1: "Krungsri Consumer",
    title2: "",
  },
  {
    id: 5,
    src: "assets/images/krung.jpg",
    title1: "Krungsri Consumer",
    title2: "(Loan Card)",
  },
  {
    id: 6,
    src: "assets/images/fc.png",
    title1: "Krungsri First Choice",
    title2: "",
  },
  {
    id: 7,
    src: "assets/images/fc.png",
    title1: "Krungsri First Choice",
    title2: "(Loan Card)",
  },
];
function SelectPage({}: Props) {
  return (
    <Container maxWidth='lg'>
      <Stack
        sx={{ mt: 2 }}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography fontWeight={700}>Select Payment Channel</Typography>
        <img
          src='assets/images/eng.png'
          style={{ width: 25, height: 25, borderRadius: "50%" }}
        />
      </Stack>
      <Divider sx={{ mt: 2 }} />
      <Grid container sx={{ mt: 1 }} spacing={3}>
        <Grid item xs={12} lg={3}>
          {dataSelect.map((item) => (
            <Stack
              flexDirection={"row"}
              gap={1}
              sx={{ mt: 2 }}
              alignItems={"center"}
              key={item.id}
              justifyContent={"space-between"}
            >
              <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                <Box
                  sx={{
                    width: 4,
                    background: item.id == 2 ? "blue" : "",
                    height: 30,
                  }}
                />

                <Box sx={{ color: item.id == 2 ? "blue" : "" }}>
                  {item.icon}
                </Box>
                <Typography
                  variant='subtitle2'
                  sx={{ color: item.id == 2 ? "blue" : "" }}
                >
                  {item.title}
                </Typography>
              </Stack>
              <ArrowForwardIosIcon
                sx={{
                  width: 15,
                  height: 15,
                  color: item.id == 2 ? "blue" : "grey",
                }}
              />
            </Stack>
          ))}
        </Grid>
        <Grid item xs={12} lg={8}>
          {dataBank.map((item) => (
            <Stack
              sx={{
                border: item.id == 1 ? "2px solid blue" : "1px solid grey",
                p: 1,
                borderRadius: "0.5rem",
                mb: 2,
              }}
              flexDirection={"row"}
              gap={2}
              justifyContent={"space-between"}
              alignItems={"center"}
              key={item.id}
            >
              <Stack
                flexDirection={"row"}
                gap={1}
                alignItems={"center"}
                sx={{ width: 240 }}
              >
                <img
                  src={item.src}
                  style={{ width: 40, height: 40, borderRadius: "50%" }}
                />
                <Box>
                  <Typography fontWeight={700}>{item.title1}</Typography>
                  <Typography fontWeight={700}>{item.title2}</Typography>
                </Box>
              </Stack>
              <Divider flexItem orientation='vertical' />
              <FormControl variant='standard' sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id='demo-simple-select-standard-label'>
                  - Please Select -
                </InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                >
                  {currencies.map((item) => (
                    <MenuItem value={item.label}>{item.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Divider flexItem orientation='vertical' />
              <Box sx={{ width: 150 }}>
                <Typography variant='subtitle2' sx={{ color: "grey" }}>
                  Monthly Pay (THB)
                </Typography>
                <Stack flexDirection={"row"} justifyContent={"flex-end"}>
                  <Typography>0.00</Typography>
                </Stack>
                <Typography variant='subtitle2' sx={{ color: "grey" }}>
                  interest Rate
                </Typography>
                <Stack flexDirection={"row"} justifyContent={"flex-end"}>
                  <Typography>0.00%</Typography>
                </Stack>
              </Box>
            </Stack>
          ))}
        </Grid>
      </Grid>

      <Stack flexDirection={"row"} justifyContent={"center"}>
        <Button
          variant='contained'
          size='small'
          sx={{
            mt: 5,
            mb: 3,
            color: "white",
            background: "rgb(228, 227, 227)",
            width: 250,
            ":hover": {
              background: "rgb(228, 227, 227)",
            },
          }}
        >
          Make Payment
        </Button>
      </Stack>
      <Divider sx={{ mt: 2 }} />
      <Stack justifyContent={"center"} flexDirection={"row"} mt={2} mb={2}>
        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
          <Typography sx={{ color: "grey", fontSize: 10 }}>
            &copy; 2023 Prain FinTech Co., Ltd. All rights reserved.
          </Typography>
          <Divider orientation='vertical' flexItem />

          <Typography style={{ color: "blue", fontSize: 10 }}>
            www.chillpay.co
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
export default SelectPage;
