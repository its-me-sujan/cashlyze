from rest_framework import serializers


class EmptySerializer(serializers.Serializer):
    pass


class ChoicesSerializer(serializers.Serializer):
    label = serializers.CharField()
    value = serializers.CharField()
