import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Image, Line, Path } from 'react-native-svg';

  const nodes = [
    { id: 1, x: 100, y: 100, image: require('../../assets/images/hardini.jpg') },
    { id: 2, x: 200, y: 200, image: require('../../assets/images/john.jpg') },
    { id: 3, x: 300, y: 100, image: require('../../assets/images/jakob.jpg') },
    { id: 4, x: 100, y: 400, image: require('../../assets/images/jakob.jpg') },
  ];
  
  const links = [
    { id: 1, source: 1, target: 2 },
    { id: 2, source: 2, target: 3 },
    { id: 3, source: 3, target: 1 },
    { id: 4, source: 1, target: 4 },
  ];
  const Graph = () => {
    return (
      <View style={styles.container}>
        <Svg width="100%" height="100%" viewBox="0 0 400 400">
          {links.map((link) => (
            <Line
              key={link.id}
              x1={nodes.find((node) => node.id === link.source).x}
              y1={nodes.find((node) => node.id === link.source).y}
              x2={nodes.find((node) => node.id === link.target).x}
              y2={nodes.find((node) => node.id === link.target).y}
              stroke="black"
              strokeWidth="2"
            />
          ))}
          {nodes.map((node) => (
            <React.Fragment key={node.id}>
              <Circle cx={node.x} cy={node.y} r="40" fill="#ffffff" />
              <Image href={node.image} x={node.x - 30} y={node.y - 30} width="60" height="60" />
            </React.Fragment>
          ))}
        </Svg>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default Graph;