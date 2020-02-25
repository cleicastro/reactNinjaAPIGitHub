import React from 'react';
import Button from './button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const LikeButton = () => (
    <Button name="btn btn-primary" handleClick={() => alert('Like')} disabled={false}> <FontAwesomeIcon icon={faThumbsUp} /> Like </Button>
)

const DesLikeButton = () => (
    <Button name="btn btn-info" handleClick={() => alert('DesLike')} disabled={true}> <FontAwesomeIcon icon={faThumbsDown} /> DesLike </Button>
)

export {LikeButton, DesLikeButton}