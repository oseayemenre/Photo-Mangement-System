import { Text, TouchableOpacity } from "react-native";

export default function Categories({ label }: { label: string }) {
  return (
    <TouchableOpacity className='bg-[#11152F] w-[106.31px] h-[43.19px] flex justify-center items-center rounded-[44.3px] mr-[8.86px]'>
      <Text className='text-white'>{label}</Text>
    </TouchableOpacity>
  );
}
