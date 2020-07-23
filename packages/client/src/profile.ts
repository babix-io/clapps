

type Theme = 'dark' | 'light';

interface Settings {
  showTopSites: boolean;
  theme: Theme;
}

interface IProfileService {
  fetchSettings(): Promise<Settings>;
  updateSettings(settings: Settings): Promise<void>;
}

export class ProfileService implements IProfileService {
  fetchSettings(): Promise<Settings> {
    throw new Error("Method not implemented.");
  }
  updateSettings(settings: Settings): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
