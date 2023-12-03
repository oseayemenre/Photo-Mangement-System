import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Categories from "../components/categories";

export default function Options() {
  const blobs = ["World", "Winter", "Trees", "Garden"];
  return (
    <View className='flex-1 bg-[#040E28] pl-[31.01px]'>
      <SafeAreaView>
        <Text className='text-white font-["uninueu-bold"] text-[35.44px] mb-[63.12px] mt-[48px]'>
          Select options
        </Text>
        <FlatList
          data={blobs}
          renderItem={({ item }) => <Categories label={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text className='mt-[27.69px] font-["uninueu-bold"] text-[21px] text-white'>
          Choose a style of picture
        </Text>

        <Text className='mt-[53.59px] text-white mb-[50.94px]'>Pictures</Text>

        <View className='bg-[#11152F] py-[9.55px] mr-[31.01px] px-[12px] rounded-[17.72px] leading-[21.04px]'>
          <Text className='text-[12.18px] leading-[21.04px] text-white w-[85%] font-["gilroy-regular"]'>
            Lorem ipsum dolor sit amet consectetur. Feugiat amet aliquam
            adipiscing ipsum hendrerit neque. Eu enim justo vulputate facilisis
            diam eget eu. Tempus orci nunc vitae aliquam.
          </Text>
        </View>

        <View className='mr-[31px]'>
          <TouchableOpacity className='mt-[37.65px] bg-[#357FD6] w-[208.2px] h-[58.69px] rounded-[42.08px] flex justify-center items-center mx-auto'>
            <Text className='text-white font-["uninueu-bold"] text-[17.72px]'>
              Generate
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
