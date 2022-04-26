import { HiCalendar } from "react-icons/hi";
import { Box, Text, Flex, Spacer, Tag } from "@chakra-ui/react";

import dayjs from "dayjs";
import "dayjs/locale/es";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex>
        <Text fontSize="2x1">
          Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>

      <Flex align="center">
        <HiCalendar />
        <Text fontSize="sm" ml={1}>
          {dayjs(launch.launch_date_local).locale("es").format("D MMM, YYY")}
        </Text>
      </Flex>
    </Box>
  );
}
