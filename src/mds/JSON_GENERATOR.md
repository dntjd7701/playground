### JSON GENERATOR 

https://json-generator.com/

- 원하는 JSON데이터를 생성할 수 있도록 도와주는 사이트.
- 예시를 보고 간단한게 사용법을 파악 가능. 


#### 결과 

간단한 mock 데이터를 원한다. 그럼 사용하기 좋다. 여기서 사용한 내용은 다음과 같다. 

```json
[
'{{repeat(5, 7)}}',
{
id: '{{objectId()}}',
title: '{{lorem(integer(1,2), "sentences")}}',
description: '{{lorem(integer(2,4), "paragraphs")}}'
}
]
```

