#include <stdio.h>
<<<<<<< HEAD
#define CSIZE 4

struct student{
    char name[10];
    float grade[3];
    float average;
};

void get_scores(struct student ar[],  int lim);
void find_means(struct student ar[],  int lim);
void show_class(struct student ar[],  int lim);

int main(void){
    struct student ar[CSIZE]{
    {.name="Alice"},
    {.name="Bob"},
    {.name="Charlie"},
    {.name="David"}
    };

    get_scores(ar, CSIZE);
    find_means(ar, CSIZE);
    show_class(ar, CSIZE);

    return 0;
}

void get_scores(struct student ar[],  int lim){
    for(int i = 0; i < lim; i++){
        for(int j = 0; j < 3; j++){
            printf("%s: score(%d) is \n", ar[i].name, j+1);
            scanf("%f", &ar[i].grade[j]);
        }
        printf("\n");
    }
}

void find_means(struct student ar[],  int lim){
    for(int i = 0; i < lim; i++){
        ar[i].average = (ar[i].grade[0]+ar[i].grade[1]+ar[i].grade[2])/3;
    }
}

void show_class(struct student ar[],  int lim){
    for(int i = 0; i < lim; i++){
        printf("%s\n", ar[i].name);
        for(int j = 0; j < 3; j++){
            printf("%f\n", ar[i].grade[j]);
        }
        printf("%f\n", ar[i].average);
        printf("\n");
    }
=======
int main(){
    printf("hello world\n");
    return 0;
>>>>>>> b2be38db77ca7eef34ac64d08a4797637eca9def
}