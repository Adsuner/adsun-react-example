import { useState } from "react";
import { createRoot } from "react-dom/client";
import { useAdsun } from "./useAdsun";

function App() {
  const [coins, setCoins] = useState(0);
  const show = useAdsun({ blockId: "YOUR_BLOCK_ID", debug: true, onReward: () => setCoins((c) => c + 100) });
  return <main><h1>Coins: {coins}</h1><button onClick={show}>Watch ad → +100</button></main>;
}
createRoot(document.getElementById("root")!).render(<App />);
