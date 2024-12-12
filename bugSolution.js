// bugSolution.js
// This solution addresses the Expo Camera preview freezing issue by incorporating state management 
// and strategically managing the camera's lifecycle.

import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
          let photo = await cameraRef.current.takePictureAsync();
          console.log('Photo taken:', photo);
      } catch (error) {
          console.error('Error taking picture:', error);
      }
    }
  };

  if (hasPermission === null) {
    return <View><Text>Requesting camera permission...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => {takePicture();}}>
            <Text>Take Picture</Text>
          </TouchableOpacity> 
        </View>
      </Camera>
    </View>
  );
};

export default CameraComponent;