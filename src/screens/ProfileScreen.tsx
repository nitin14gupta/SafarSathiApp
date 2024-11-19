import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IMAGES from '../constants/images'
const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header Section */}
      <View style={styles.profileHeader}>
        <Image
          source={IMAGES.globeImg} // Replace with actual image URL
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Nitin, 18</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons (e.g., Pay Plan, Profile Insights) */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Pay Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Profile Insights</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Safety and Wellbeing</Text>
        </TouchableOpacity>
      </View>

      {/* Spotlight and SuperSwipe */}
      <View style={styles.featuresContainer}>
        <View style={styles.featureBox}>
          <Icon name="star" size={24} color="black" />
          <Text style={styles.featureText}>Spotlight</Text>
          <Text style={styles.featureSubtitle}>Stand out</Text>
        </View>
        <View style={styles.featureBox}>
          <Icon name="star-border" size={24} color="black" />
          <Text style={styles.featureText}>SuperSwipe</Text>
          <Text style={styles.featureSubtitle}>Get noticed</Text>
        </View>
      </View>

      {/* Premium Section */}
      <View style={styles.premiumContainer}>
        <Text style={styles.premiumTitle}>Premium+</Text>
        <Text style={styles.premiumDescription}>
          Get the VIP treatment, and enjoy better ways to connect with incredible people.
        </Text>
        <TouchableOpacity style={styles.premiumButton}>
          <Text style={styles.premiumButtonText}>Explore Premium+</Text>
        </TouchableOpacity>
      </View>

      {/* Benefits List */}
      <View style={styles.benefitsContainer}>
        <View style={styles.benefitRow}>
          <Text style={styles.benefitText}>Get exclusive photo insights</Text>
          <Icon name="check" size={20} color="green" />
        </View>
        <View style={styles.benefitRow}>
          <Text style={styles.benefitText}>Fast track your likes</Text>
          <Icon name="check" size={20} color="green" />
        </View>
        <View style={styles.benefitRow}>
          <Text style={styles.benefitText}>Stand out every day</Text>
          <Icon name="check" size={20} color="green" />
        </View>
        {/* Add more benefit rows as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    marginTop: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    width: '35%',
  },
  editButtonText: {
    color: '#333',
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  actionButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    textAlign:'center',


  },
  actionButtonText: {
    color: '#000',
    fontSize: 14,
    textAlign:'center',
    alignItems: 'center'
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  featureBox: {
    alignItems: 'center',
    width: '45%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  featureText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  featureSubtitle: {
    fontSize: 12,
    color: '#777',
  },
  premiumContainer: {
    backgroundColor: '#ffde59',
    padding: 20,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: 'center',
  },
  premiumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  premiumDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },
  premiumButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  premiumButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  benefitsContainer: {
    marginVertical: 20,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  benefitText: {
    fontSize: 14,
    color: '#333',
  },
});

export default ProfileScreen;
