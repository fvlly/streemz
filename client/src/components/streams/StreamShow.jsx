import { useEffect, useRef } from "react"
import flv from 'flv.js'
import { AspectRatio, Heading, Text } from "@chakra-ui/react"
import { connect } from "react-redux"
import { fetchStream } from "../../actions"


const StreamShow = (props) => {

  const {id} = props.match.params
  const videoRef = useRef()

  useEffect(()=>{
    props.fetchStream(props.match.params.id)
   let player = flv.createPlayer({
      type: 'flv',
      url:`http://localhost:8000/live/${id}`
    })
    player.attachMediaElement(videoRef.current)
    player.load()
  },[])
  
 console.log(videoRef);
  return (
    <>
    <AspectRatio ratio={5/3}>
    <video ref={videoRef} controls />

    </AspectRatio >
    <Heading as='h4'>{props.stream && props.stream.title}</Heading>
    <Text>{props.stream && props.stream.description}</Text>
    </>
  )
}

const mapStateToProps = (state,ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{fetchStream})(StreamShow)