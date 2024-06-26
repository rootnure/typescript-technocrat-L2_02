{
  // mapped types

  /* Normal map method in array */
  const arrOfNumbers: number[] = [1, 2, 7];
  // const arrOfString: string[] = ['1', '2', '7'];
  const arrOfString: string[] = arrOfNumbers.map(number => number.toString());


  /* mapped type */
  type AreaNumber = {
    height: number;
    weight: number;
  };

  // manually type change
  type AreaString = {
    height: string;
    weight: string;
  }

  // update type using mapped
  type AreaStringMapped = {
    // [key in 'height' | 'width']: string; // hard coded
    [key in keyof AreaNumber]: string; // keyof
  }


  type Height = AreaNumber["height"]; // lookup type


  // T => { height: string; width: number }
  // key => T["height"],            key => T["width"]
  type AreaStringDynamic<T> = {
    [key in keyof T]: T[key];
  }


  const area1: AreaStringDynamic<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };






  // console.log({ arrOfNumbers, arrOfString });
  //
}