import * as React from "react";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./Searchbar";
import "./Modal.css";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import eth from "../Images/Ethereum.png";
import btc from "../Images/BTC.png";
import bnb from "../Images/BNB.png";

const baseURL = "https://api1.binance.com/api/v3/ticker/price";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  height: "350px",
  bgcolor: "background.paper",
  borderRadius: "18px",
  backgroundColor: "#181627",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const coins = [
  // { name: "ETHBTC", image: eth },
  // { name: "LTCBTC", image: btc },
  // { name: "BNBUSDT", image: bnb },
  // { name: "NEOBTC", image: eth },
  // { name: "QTUMETH", image: btc },
  // { name: "EOSETH", image: bnb },
];



export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [cls, setCls] = React.useState("");
  const [compare, setCompare] = React.useState(coins);
  const [axiosData, setAxiosData] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAxiosData(response.data);
    });
  }, []);

  axiosData.slice(0,9).map(item => {
    coins.push({name:`${item.symbol}`})
  })
  

  function search(enteredValue) {
    // console.log(enteredValue)
    const result = coins.filter((datas) => {
      return datas.name && datas.name.toLowerCase().includes(enteredValue);
    });
    setCompare(result);
  }

  return (
    <div >
      <FontAwesomeIcon onClick={handleOpen} icon={faCaretDown} />
      {/* <Button >Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="overflow" sx={style}>
          <div className="searchbar">
            <SearchBar close={handleClose} onSearch={search} />
          </div>
          <br />
          {compare.map((d) => {
            return (
              <div
                
                onClick={() => {
                  setCls(d.name);
                }}
                className={cls === d.name ? "data1" : "data"}
              >  
              
                <img src={d.image} alt="img" />
                <h4>{d.name}</h4>
                {cls === d.name && (
                  <DoneIcon className="tick" sx={{ color: "#58ADAB" }} />
                )}
              </div>
            );
          })}
          {/* {axiosData.map((d) => {
            return (
              <div key={d.symbol} >
                <h4>
                  {d.symbol}
                </h4>
              </div>
            );
          })} */}
        </Box>
      </Modal>
    </div>
  );
}
