import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList>;
