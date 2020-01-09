import React from 'react'
import Gallery from "react-photo-gallery"
import { pic } from "./witphotos"
export default class Wit extends React.Component {

    constructor(){
        super()
        this.state = {
            photos: []
        }
    }
  componentDidMount = ()=>{
     let {photos} = this.state
    this.props.images.map((v,i)=> {
        let obj = {src : v.file.url,width: pic[i].width,
            height: pic[i].height}
        photos.push(obj)
        // console.log(photos)
    })

    this.setState({
        photos : photos
    })
}
    render() {
        console.log(this.state.photos)
        return(
        <Gallery photos={this.state.photos} onClick={()=> this.props.onClick()} />
    
        )}
}