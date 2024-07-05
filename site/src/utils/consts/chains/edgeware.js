import EdgewareIcon from "../../../components/icons/edgewareIcon";

const nodes = [
  {
    name: "Jelliedowl",
    url: "wss://edgeware-rpc1.Jelliedowl.net/",
  },
];

const edgeware = {
  name: "Edgeware",
  icon: <EdgewareIcon />,
  value: "edgeware",
  symbol: "EDG",
  decimals: 18,
  color: "#7578FB",
  colorSecondary: "rgba(117,120,251, 0.1)",
  modules: {
    identity: true,
  },
  nodes,
  useOnChainBlockData: true,
};

export default edgeware;
