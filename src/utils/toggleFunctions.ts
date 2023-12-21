export const colorTogglerOnFocused = (
    element: React.RefObject<HTMLDivElement> | React.RefObject<HTMLSelectElement>,
    isSelectElement: boolean = false
  ) => {
    // React.MutableRefObject<null> it for null value so the ts dosen't know about the style property so change it do  React.RefObject<HTMLDivElement // element namn>
  
    if (element.current) {
      element.current.style.transition = "all 0.3s ease-in-out";
      element.current.style.borderColor = "rgba(0, 68, 255, 0.62)";
  
      if (!isSelectElement) {
        const firstElement = element.current.firstChild as HTMLElement;
        firstElement.style.transition = "all 0.3s ease-in-out";
        firstElement.style.color = "rgba(0, 68, 255, 0.62)";
      }
  
  
    }
  };
  
  export const colorTogglerOnBlur = (
    element: React.RefObject<HTMLDivElement> | React.RefObject<HTMLSelectElement>,
    isSelectElement: boolean = false
  ) => {
    if (element.current) {
      element.current.style.transition = "all 0.5s";
      element.current.style.borderColor = "rgba(39, 39, 39, 0.27)";
  
      if (!isSelectElement) {
        const firstElement = element.current.firstChild as HTMLElement;
        firstElement.style.transition = "all 0.3s ease-in-out";
        firstElement.style.color = "rgba(39, 39, 39, 0.27)";
      }
  
  
    }
  };
  
  
  export const togglePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    element: React.RefObject<HTMLDivElement>,
    setEyeToggler:React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    e.preventDefault();
    const input = element.current?.querySelector("input") as HTMLInputElement;
    const currentType = input.type;
    if (currentType === "password") {
      input.type = "text";
      setEyeToggler(true);
    } else {
      input.type = "password";
      setEyeToggler(false);
    }
  };
  
  export interface ErrorHandler extends Error {
    message: string;
    statusCode: number;
    code?: number;
  }
  