{
  //

  // interface -- generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYer: number;
    };
    smartWatch: T;
    bike?: X;
  }

  const poorDevelper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Kasem",
    computer: {
      brand: "Kutu",
      model: "X-rewr",
      releaseYer: 2025,
    },
    smartWatch: {
      brand: "Bal",
      model: "435Kga",
      display: "OLED",
    },
  };

  interface RichSmartWatch {
    brand: string;
    model: string;
    heatTrack: boolean;
    sleepTrack: boolean;
  }

  interface SuzukiBike {
    model: string;
    cc: number;
  }

  const richDevelper: Developer<RichSmartWatch, SuzukiBike> = {
    name: "Codna",
    computer: {
      brand: "Kutu HP",
      model: "X-re%r",
      releaseYer: 2055,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "435Kga88",
      heatTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Suzuki",
      cc: 200,
    },
  };

  //
}
