import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useId } from "react";
import { Answer } from "@/types/types";

type Props = {
  label: string;
  value: Answer;
};

const Choice = ({ value, label }: Props) => {
  const id = useId();
  return (
    <div className="row items-center">
      <RadioGroupItem value={value} id={id} className="cursor-pointer" />
      <Label
        className="relative pl-2 text-md font-medium cursor-pointer"
        htmlFor={id}
      >
        {label}
      </Label>
    </div>
  );
};

export default Choice;
