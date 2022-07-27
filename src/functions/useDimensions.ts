import { Dimensions } from "react-native";

export const HEIGHT = Dimensions.get("window").height;
export const WIDTH = Dimensions.get("window").width;

/// <summary>
/// Returns pixels using screen dimensions.
/// <Returns> {h, w} </Returns>
/// <Exception> none </Exception>
/// </summary>

export default (): any => {
  return {
    h: (percent: number) => {
      console.log(HEIGHT)
      return (HEIGHT * percent) / 100;
    },
    w: (percent: number) => {
      console.log(WIDTH)
      return (WIDTH * percent) / 100;
    }
  };
};
