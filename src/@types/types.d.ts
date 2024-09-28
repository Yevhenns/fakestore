interface Product {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type RootStackParamList = {
  Home: undefined;
  Favorites: undefined;
  Details: {productId: number | string; source?: 'Home' | 'Favorites'};
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type FavoriteScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Favorites'
>;

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;
