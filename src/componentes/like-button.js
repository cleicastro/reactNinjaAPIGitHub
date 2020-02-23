import React from 'react';
import Button from './button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbtack } from '@fortawesome/free-solid-svg-icons'

const LikeButton = () => (
    <Button name="btn btn-primary" handleClick={() => alert('Like')}> <FontAwesomeIcon icon={faThumbsUp} /> Like </Button>
)

const DesLikeButton = () => (
    <Button name="btn btn-info" handleClick={() => alert('DesLike')}> <FontAwesomeIcon icon={faThumbtack} /> DesLike </Button>
)

export {LikeButton, DesLikeButton}