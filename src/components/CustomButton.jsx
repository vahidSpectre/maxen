import React, { useState } from "react";
import { motion } from "framer-motion";

import { ArrowBackIos } from "@mui/icons-material";

import classes from "./CustomButton.module.css";
const CustomButton = ({ className, onClick, children, href }) => {
  const [isHovering, setIsHovering] = useState(false);

  const initialButtonState = {
    scale: 1,
  };

  return (
    <motion.button
      className={`${classes.main} ${className}`}
      onClick={onClick}
      initial={initialButtonState}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <motion.span
        className={classes.icon_wrapper}
        animate={{ x: isHovering ? -5 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <ArrowBackIos className={classes.arrow_icon} />
      </motion.span>
      {href !== '' ? (
        <p className={classes.btn_text}>{children}</p>
      ) : (
        <a href={href}>
          <p className={classes.btn_text}>{children}</p>
        </a>
      )}
    </motion.button>
  );
};

export default CustomButton;
