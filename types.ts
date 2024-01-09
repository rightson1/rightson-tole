export interface TimeType {
  time: number;
  type: "before" | "after" | "last";
}
export interface OpenProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
