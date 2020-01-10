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
  componentDidMount = async()=>{
     let {photos} = this.state
   await this.props.images.map((v,i)=> {
        let obj = {src : v.file.url,width: pic[i].width,
            height: pic[i].height}
        photos.push(obj)
        // console.log(photos)
    })

   await this.setState({
        photos : photos
    })

    this.props.getAllphotoo(this.state.photos)
}


    render() {
        console.log(this.props)
        return(
        <Gallery photos={this.state.photos} onClick={this.props.onClick} />
        )}
}