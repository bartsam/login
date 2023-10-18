import Typography from "@/components/atoms/Typography";
import LoginFrom from "@/components/organisms/LoginFrom";
import Box from "@/components/molecules/Box";

export default function Login() {
  return (
    <Box>
      <Typography tag="h1">Login</Typography>
      <LoginFrom />
    </Box>
  );
}
