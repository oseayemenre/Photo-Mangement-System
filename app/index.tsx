import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  return (
    <View className='flex-1 bg-[#040E28] relative'>
      <SafeAreaView className='mx-[31px]'>
        <View className='mt-[8px]'>
          <View className='flex-row justify-between items-center'>
            <TouchableOpacity>
              <MaterialCommunityIcons name='menu' size={26} color='white' />
            </TouchableOpacity>
            <Image
              source={require("../assets/images/elipse_1.png")}
              style={{ width: 39.87, height: 39.87 }}
            />
          </View>

          <Text className='text-white text-[35.44px] leading-[47.84px] mt-[42.08px] font-["uninueu-bold"]'>
            Create incredible universes
          </Text>

          <Text className='text-white mt-[178.3px]'>Image</Text>
        </View>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => router.push("/options")}
        className='absolute bottom-0 right-[-5px] bg-[#DFCF3D] py-[28.98px] px-[48.5px] rounded-tl-[49.83px] rounded-br-[49.83px]'
      >
        <Text className='text-[#303030] text-[17px] font-["uninueu-bold"]'>
          Create new image
        </Text>
      </TouchableOpacity>
    </View>
  );
}
