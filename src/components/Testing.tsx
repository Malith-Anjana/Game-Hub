import { Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { IconType } from "react-icons";

const Testing = () => {
  const iconMap: {[key:string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
  };
  const arr = ['pc','playstation', 'xbox', 'mac', 'android', 'linux']
  return <>

     { arr.map((ar, index) => <div key={index}> <Icon as={iconMap[ar]} color='gray' /></div>)}
  </>;
};

export default Testing;
