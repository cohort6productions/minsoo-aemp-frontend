export interface IInputProps {
  message: string;
}

export interface IContentBoxProps {
  url: string;
}

export interface ISectionHeaderProps {
  header: string;
  subHeader: string;
}

export interface ITeamProps {
  name: string;
  title: string;
  picture: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
}
export interface IHowToCardProps{
  heading?: string;
  subHeading?: string;
  content?: string;
  picture?: string;
}

// NavBar
export interface INavBarState {
  isOpen: boolean;
}

// CreatorProjectBox
export interface ICreatorProjectBoxProps{
  name: string;
  description: string;
  image: any;
}

// CreatorProjectGridDisplay
export interface ICreatorProjectDisplayProps{
  list: ICreatorProjectBoxProps[];
}
