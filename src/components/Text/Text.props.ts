import { Text } from "@gravity-ui/uikit";

export default interface CustomTextProps extends React.ComponentProps<typeof Text> {
 size?: 's' | 'm' | 'l';  
 color?: 'primary' | 'secondary'; 
 children: React.ReactNode;
}