import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const UnselectedWordListItem = ({
  id,
  children,
  primaryAction,
  secondaryAction,
  checked,
}: {
  id: number;
  children: React.ReactNode;
  primaryAction: VoidFunction;
  secondaryAction: VoidFunction;
  checked?: boolean;
}): React.ReactElement => (
  <ListItem
    key={id}
    sx={{
      p: 0,
      borderSize: "1px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "transparent",
      borderRadius: "4px",
    }}
    secondaryAction={
      <IconButton edge="end" aria-label="include" onClick={secondaryAction}>
        {checked ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
      </IconButton>
    }
  >
    <ListItemButton onClick={primaryAction}>
      <ListItemText
        sx={{
          maxWidth: "370px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {children}
      </ListItemText>
    </ListItemButton>
  </ListItem>
);
