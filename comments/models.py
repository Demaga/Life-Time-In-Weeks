from django.db import models
from create.models import PublicLife
from django.utils import timezone

# Create your models here.
class Comment(models.Model):
    post = models.ForeignKey('create.PublicLife', on_delete=models.CASCADE, related_name='comments')
    author = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.text