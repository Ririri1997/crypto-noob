import React from 'react';
import { Text as TextGUI} from "@gravity-ui/uikit";
import cn from 'classnames';
import styles from './Text.module.css';
import CustomTextProps from './Text.props';

const Text: React.FC<CustomTextProps> = ({ size = 'm', color = 'primary', children, className, ...rest }) => {
 return (
   <TextGUI
     {...rest}  
     className={cn(styles.text, styles[size], styles[color], className)} 
   >
     {children}
   </TextGUI>
 );
};

export default Text;
