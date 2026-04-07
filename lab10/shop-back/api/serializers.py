from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate(self, data):
        if data['count'] == 0:
            raise serializers.ValidationError("Count must be greater than 0")

        if data['is_active'] == False:
            raise serializers.ValidationError("Product must be active")

        return data
        