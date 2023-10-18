"use client";

import Button from "@/components/atoms/Button";
import { useLoginContext } from "@/contexts/LoginContext";
import Typography from "@/components/atoms/Typography";
import Box from "@/components/molecules/Box";

export default function Account() {
  const { email, setEmail } = useLoginContext();
  return (
    <Box>
      <Typography tag="h1">Welcome</Typography>
      <Typography tag="p">{email}</Typography>
      <Button variant="secondary" href="/" onClick={() => setEmail(null)}>
        back
      </Button>
    </Box>
  );
}
