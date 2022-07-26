import {
  Box,
  Divider,
  Flex,
  Text,
  Icon,
  Heading,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { AiFillCamera } from "react-icons/ai";
import { Link } from "react-router-dom";

const StreamList = ({ streams, fetchStreams, currentUserId,isSignedIn }) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  // renders if user is signed in
  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <Flex gap={2}>
          <Button colorScheme="green">Edit</Button>
          <Button colorScheme="red">Delete</Button>
        </Flex>
      );
    }
  };

  const renderCreateButton = () => {
    if(isSignedIn) {
      return (
        <Flex align='center' justify='end' my={6}>
          <Link to='/streams/new' >
          <Button colorScheme='blue'>Create stream</Button>
        </Link>
        </Flex>
      )
    }
  }

  const renderList = () => {
    return streams.map((stream) => {
      return (
        <>
          <Flex>
            <Flex align="center" gap="3">
              <Icon as={AiFillCamera} w={6} h={6} />
              <Box>
                <Text fontWeight="500" fontSize="18">
                  {stream.title}
                </Text>
                <Text>{stream.description}</Text>
              </Box>
            </Flex>
            <Spacer />
            {renderAdmin(stream)}
          </Flex>
          <Divider />
        </>
      );
    });
  };

  return (
    <>
      <Heading mb="3">Streams</Heading>
      {renderList()}
      {renderCreateButton()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
