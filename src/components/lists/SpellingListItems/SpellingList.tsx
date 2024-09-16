/** @format */

import { SelectedWordListItem } from "./SelectedWordListItem";
import { UnselectedWordListItem } from "./UnselectedWordListItem";

const SpellingListItem = ({
  id,
  children,
  primaryAction,
  secondaryAction,
  deleteList,
  selected,
  checked,
}: {
  id: number;
  children: React.ReactNode;
  primaryAction: VoidFunction;
  secondaryAction: VoidFunction;
  deleteList: VoidFunction;
  selected?: boolean;
  checked?: boolean;
}) =>
  selected ? (
    <SelectedWordListItem checked={checked} id={id} handleDeleteList={deleteList} secondaryAction={secondaryAction}>
      {children}
    </SelectedWordListItem>
  ) : (
    <UnselectedWordListItem checked={checked} id={id} primaryAction={primaryAction} secondaryAction={secondaryAction}>
      {children}
    </UnselectedWordListItem>
  );

export default SpellingListItem;
