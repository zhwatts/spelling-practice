import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";

export const SelectedWordListItem = ({
  id,
  children,
  secondaryAction,
  checked,
}: {
  id: number;
  children: React.ReactNode;
  secondaryAction: VoidFunction;
  checked?: boolean;
}): React.ReactElement => (
  <ListItem
    key={id}
    sx={{
      py: 1,
      background: "rgba(0,255,0,.1)",
      borderSize: "1px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "primary.main",
      borderRadius: "4px",
    }}
    secondaryAction={
      <IconButton edge="end" aria-label="include" onClick={secondaryAction}>
        {checked ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
      </IconButton>
    }
  >
    <ListItemText>{children}</ListItemText>
  </ListItem>
);
